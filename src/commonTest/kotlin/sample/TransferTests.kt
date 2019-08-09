package sample

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals

class TransferTests {

    val employer = "employer"
    val shop = "shop"
    val taxi = "taxi"

    val salary = "salary"
    val food = "food"
    val travel = "travel"

    @Test
    fun balanceTest () {
        assertEquals(29250, testData().balance())
        assertNotEquals(29000, testData().balance())
    }

    /*@Test
    fun balanceNegativeTest () {
        assertEquals(29000, testData().balance())
        assertNotEquals(29250, testData().balance())
    }*/

    private fun testData() : List<Transfer> = listOf(
        Transfer("2019-01-01", employer, salary, 30000),
        Transfer("2019-01-02", shop, food, -300),
        Transfer("2019-01-02", taxi, travel, -200),
        Transfer("2019-01-07", shop, food, -250)
    )
}