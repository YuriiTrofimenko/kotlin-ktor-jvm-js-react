package sample

import io.ktor.application.*
import io.ktor.features.CORS
import io.ktor.html.*
import io.ktor.http.content.*
import io.ktor.request.receiveText
import io.ktor.response.respond
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import kotlinx.coroutines.io.writer
import kotlinx.html.*
import kotlinx.html.map
import kotlinx.serialization.*
import kotlinx.serialization.json.JSON
import kotlinx.serialization.json.Json
import java.io.File
import java.text.SimpleDateFormat
import java.util.*

@ImplicitReflectionSerializer
fun main() {

    val storage = TransfersStorage(File("local"))

    embeddedServer(Netty, port = 8080, host = "127.0.0.1") {

        install(CORS){anyHost()}

        routing {
            /* get("/") {
                call.respondHtml {
                    head {
                        title("Hello from Ktor!")
                    }
                    body {
                        +"Hello Ktor"
                        div {
                            id = "js-response"
                            +"Loading..."
                        }
                    }
                }
            } */
            get{
                call.respond(
                    Json.stringify(
                        (String::class.serializer() to Int::class.serializer()).map
                        ,storage.getAll()
                            .byMonth()
                            .map { it.key.toString() to it.value.balance() }
                            .toMap()
                    )
                )
            }
            post{
                storage.append(Json.parse(Transfer.serializer().list, call.receiveText()))
            }
        }
    }.start(wait = true)
}

class TransfersStorage(val dir: File) {

    val df = SimpleDateFormat("yyyy-MM-dd_hh-mm-ss")

    fun append(transfers: List<Transfer>) {
        dir.resolve(df.format(Date()) + ".json").writer().use { writer ->
            transfers.forEach{
                writer.write(Json.stringify(Transfer.serializer(), it) + "\n")
            }
        }
    }

    fun getAllFrom(file: File) = file.readLines().map { Json.parse(Transfer.serializer(), it) }

    fun getAll() = dir.listFiles().flatMap { getAllFrom(it) }
}