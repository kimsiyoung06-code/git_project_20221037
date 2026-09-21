package com.example.a2th

import android.os.Bundle
import android.util.Log
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        val myName = "김시영"
        val age: Int = 24

        Log.d("코틀린: 불변 변수 val ", "나의 이름은 " + myName)

        var myFloat = 30.2F
        var myDouble = 35.4

        Log.d("코틀린 : 실수 자료형","Float : " + myFloat)
        Log.d("코틀린 : 실수 자료형","Double : " + myDouble)

        var myBoolean : Boolean = true
        Log.d("코틀린 : 부울린 자료형","Boolean : " + myBoolean)

        var numOne = 1
        var numTwo = 300000000
        var myByte: Byte = 1
        var myInt: Int = 20
        var myLong = 25L // 명시적 Long형 지정

        Log.d("코틀린 : 정수 자료형 ", "Int : " + numOne)
        Log.d("코틀린 : 정수 자료형 ", "Long : " + numTwo)
        Log.d("코틀린 : 정수 자료형 ", "Byte : " + myByte)
        Log.d("코틀린 : 정수 자료형 ", "Int : " + myInt)
        Log.d("코틀린 : 정수 자료형 ", "Long : " + myLong)

        var myChar1 : Char = 'K'
        var myChar2 : Char = 'o'
        var myChar3 : Char = 't'
        var myChar4 : Char = 'l'
        var myChar5 : Char = 'i'
        var myChar6 : Char = 'n'
        Log.d("코틀린 : 문자 자료형", "Char : " + myChar1 + myChar2 + myChar3 + myChar4 + myChar5 + myChar6)

        var myArray : IntArray = intArrayOf(1,2,3,4,5)
        Log.d("코틀린 : 배열 자료형 ","배열의 3번쨰 값 :" + myArray[2])

        var myString1 : String = "Kotlin\n" // 명시적 String형 지정
        var myString2 : String = "Java"     // 명시적 String형 지정

        Log.d("코틀린 : 문자열 자료형 ", "String : " + myString1)
        Log.d("코틀린 : 문자열 자료형 ", "String : " + myString2)




        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
    }
}