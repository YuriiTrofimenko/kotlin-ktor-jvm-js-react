package sample

import kotlinx.serialization.*
import kotlinx.serialization.internal.StringDescriptor

expect fun LocalDateTime(text: String): LocalDateTime

expect class LocalDateTime{
    val yearMonth: YearMonth
}

expect class YearMonth{
    val year: Int
    val monthValue: Int
}

object LocalDateTimeSerializer : KSerializer<LocalDateTime>{

    override val descriptor: SerialDescriptor
        get() = StringDescriptor

    override fun deserialize(decoder: Decoder)= LocalDateTime (decoder.decodeString())

    override fun serialize(encoder: Encoder, obj: LocalDateTime) {
        encoder.encodeString(obj.toString())
    }

}