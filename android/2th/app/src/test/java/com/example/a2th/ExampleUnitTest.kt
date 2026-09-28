package com.example.a2th

import org.junit.Test
import org.junit.Assert.*

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

        var myBoolean: Boolean = true
        println("코틀린 : 부울린 자료형 : Boolean : " + myBoolean)

        var numOne = 1
        var numTwo = 300000000
        var myByte: Byte = 1
        var myInt: Int = 20
        var myLong = 25L

        println("코틀린 : 정수 자료형 : Int : " + numOne)
        println("코틀린 : 정수 자료형 : Long : " + numTwo)
        println("코틀린 : 정수 자료형 : Byte : " + myByte)
        println("코틀린 : 정수 자료형 : Int : " + myInt)
        println("코틀린 : 정수 자료형 : Long : " + myLong)

        var myChar1: Char = 'K'
        var myChar2: Char = 'o'
        var myChar3: Char = 't'
        var myChar4: Char = 'l'
        var myChar5: Char = 'i'
        var myChar6: Char = 'n'

        println(
            "코틀린 : 문자 자료형 : Char : " +
                    myChar1 + myChar2 + myChar3 + myChar4 + myChar5 + myChar6
        )

        var myArray: IntArray = intArrayOf(1, 2, 3, 4, 5)
        println("코틀린 : 배열 자료형 : 배열의 3번째 값 : " + myArray[2])

        var myString1: String = "Kotlin\n"
        var myString2: String = "Java"

        println("코틀린 : 문자열 자료형 : String : " + myString1)
        println("코틀린 : 문자열 자료형 : String : " + myString2)

        var myX: Int = 100
        var myY: Float = myX.toFloat()

        println("코틀린 : 자료형 변환 : Int : " + myX)
        println("코틀린 : 자료형 변환 : Float : " + myY)

        var x: Int = 4
        var y: Int = 2

        println("코틀린 : 덧셈 : " + (x + y))
        println("코틀린 : 뺄셈 : " + (x - y))
        println("코틀린 : 곱셈 : " + (x * y))
        println("코틀린 : 나눗셈 : " + (x / y))
        println("코틀린 : 나머지 : " + (x % y))

        println("코틀린 : 비교 연산자 : X>Y = " + (x > y))
        println("코틀린 : 비교 연산자 : X>=Y = " + (x >= y))
        println("코틀린 : 비교 연산자 : X<Y = " + (x < y))
        println("코틀린 : 비교 연산자 : X<=Y = " + (x <= y))
        println("코틀린 : 비교 연산자 : X==Y = " + (x == y))
        println("코틀린 : 비교 연산자 : X!=Y = " + (x != y))

        var x2: Int = 5
        var y2: Int = 10

        println("코틀린 : 증감 연산자")
        println("++x = " + (++x2))
        println("x++ = " + (x2++))
        println("--x = " + (--x2))
        println("x-- = " + (x2--))

        println("코틀린 : 할당 연산자 : Y = " + y2)

        y2 += x2
        println("코틀린 : 할당 연산자 : Y += X = " + y2)

        y2 -= x2
        println("코틀린 : 할당 연산자 : Y -= X = " + y2)

        y2 *= x2
        println("코틀린 : 할당 연산자 : Y *= X = " + y2)

        y2 /= x2
        println("코틀린 : 할당 연산자 : Y /= X = " + y2)

        y2 %= x2
        println("코틀린 : 할당 연산자 : Y %= X = " + y2)

        var num: Int = 10

        if (num % 2 == 0) {
            println("코틀린 : if-else 조건문 : 숫자 " + num + "은 짝수")
        } else {
            println("코틀린 : if-else 조건문 : 숫자 " + num + "은 홀수")
        }

        num = -10
        var result: String

        if (num > 0) {
            result = "숫자" + num + "은 양수"
        } else if (num == 0) {
            result = "숫자" + num + "은 0"
        } else {
            result = "숫자" + num + "은 음수"
        }

        println("코틀린 : if-else if 조건문 : " + result)

        num = -10

        if (num > 0) {
            if (num % 2 == 0) {
                result = "숫자" + num + "은 양수이고 짝수"
            } else {
                result = "숫자" + num + "은 양수이고 홀수"
            }
        } else {
            if (num % 2 == 0) {
                result = "숫자" + num + "은 음수이고 짝수"
            } else {
                result = "숫자" + num + "은 음수이고 홀수"
            }
        }

        println("코틀린 : 중첩 if 조건문 : " + result)

        var day: Int = 2
        var result2: String

        when (day) {
            1 -> result2 = "Monday"
            2 -> result2 = "Tuesday"
            3 -> result2 = "Wednesday"
            4 -> result2 = "Thursday"
            5 -> result2 = "Friday"
            6 -> result2 = "Saturday"
            7 -> result2 = "Sunday"
            else -> result2 = "Invalid day"
        }

        println("코틀린 : when 조건문 : " + result2)

        var numbers = arrayOf(1, 2, 3, 4, 5)

        for (i in numbers) {
            if (i % 2 == 1) {
                println("코틀린 : for 반복문 : 반복 변수 : " + i)
            }
        }

        val score = 95
        val attendanceRate = 85.0

        if (attendanceRate < 80.0) {
            println("코틀린 : 학점 조건문 : F 학점 (출석 미달)")
        } else {
            if (score >= 90) {
                if (score >= 95) {
                    println("코틀린 : 학점 조건문 : A+ 학점")
                    println("코틀린 : 학점 조건문 : A+ 장학생 선발 대상")
                } else {
                    println("코틀린 : 학점 조건문 : A 학점")
                }
            } else if (score >= 80) {
                println("코틀린 : 학점 조건문 : B 학점")
            } else if (score >= 70) {
                println("코틀린 : 학점 조건문 : C 학점")
            } else {
                println("코틀린 : 학점 조건문 : F 학점")
            }
        }

        println("코틀린 : 구구단")

        for (dan in 2..9) {
            println("----- " + dan + "단 -----")

            for (i in 1..9) {
                println(dan.toString() + " x " + i + " = " + (dan * i))
            }
            println()


        }
        println("코틀린 : 구구단")

        for (dan in 10..13) {
            print(dan.toString() + "단 : ")

            for (i in 5..dan) {
                print(dan.toString() + " x " + i + " = " + (dan * i) + "    ")
            }
        }
    }
}