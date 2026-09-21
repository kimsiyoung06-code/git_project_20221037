package com.example.a2th

import org.junit.Test
import org.junit.Assert.*

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {
    @Test
    fun addition_isCorrect() {
        assertEquals(4, 2 + 2)

        val myName = "김시영"
        val age: Int = 24

        println("코틀린: 불변 변수 val : 나의 이름은 " + myName)

        var myFloat = 30.2F
        var myDouble = 35.4

        println("코틀린 : 실수 자료형 : Float : " + myFloat)
        println("코틀린 : 실수 자료형 : Double : " + myDouble)

        var myBoolean : Boolean = true
        println("코틀린 : 부울린 자료형 : Boolean : " + myBoolean)

        var numOne = 1
        var numTwo = 300000000
        var myByte: Byte = 1
        var myInt: Int = 20
        var myLong = 25L // 명시적 Long형 지정

        println("코틀린 : 정수 자료형 : Int : " + numOne)
        println("코틀린 : 정수 자료형 : Long : " + numTwo)
        println("코틀린 : 정수 자료형 : Byte : " + myByte)
        println("코틀린 : 정수 자료형 : Int : " + myInt)
        println("코틀린 : 정수 자료형 : Long : " + myLong)

        var myChar1 : Char = 'K'
        var myChar2 : Char = 'o'
        var myChar3 : Char = 't'
        var myChar4 : Char = 'l'
        var myChar5 : Char = 'i'
        var myChar6 : Char = 'n'
        println("코틀린 : 문자 자료형 : Char : " + myChar1 + myChar2 + myChar3 + myChar4 + myChar5 + myChar6)

        var myArray : IntArray = intArrayOf(1,2,3,4,5)
        println("코틀린 : 배열 자료형 : 배열의 3번쨰 값 :" + myArray[2])

        var myString1 : String = "Kotlin\n" // 명시적 String형 지정
        var myString2 : String = "Java"     // 명시적 String형 지정

        println("코틀린 : 문자열 자료형 : String : " + myString1)
        println("코틀린 : 문자열 자료형 : String : " + myString2)
    }
}