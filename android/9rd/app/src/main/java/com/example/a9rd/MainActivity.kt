package com.example.a9rd // 본인 프로젝트 패키지명 확인

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    // 강의 자료 스타일로 뷰 변수 선언
    private lateinit var editNum1: EditText
    private lateinit var editNum2: EditText
    private lateinit var textResult: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // XML 아이디 연결
        editNum1 = findViewById(R.id.editNum1)
        editNum2 = findViewById(R.id.editNum2)
        textResult = findViewById(R.id.textResult)
    }

    // [계산하기] 버튼을 누를 때 실행되는 함수 (XML의 android:onClick과 연결됨)
    fun onClickCalculate(view: View) {
        val str1 = editNum1.text.toString()
        val str2 = editNum2.text.toString()

        // 빈 칸이 있는지 검사
        if (str1.isEmpty() || str2.isEmpty()) {
            Toast.makeText(applicationContext, "숫자를 모두 입력해주세요!", Toast.LENGTH_SHORT).show()
            return
        }

        // 입력된 값을 숫자로 변환
        val num1 = str1.toDoubleOrNull() ?: 0.0
        val num2 = str2.toDoubleOrNull() ?: 0.0

        // 더하기 연산 수행 (원하시면 다른 연산으로 변경 가능)
        val sum = num1 + num2

        // 정수일 경우 소수점 없이 깔끔하게 표시
        if (sum % 1.0 == 0.0) {
            textResult.text = "결과: ${sum.toInt()}"
        } else {
            textResult.text = "결과: $sum"
        }

        Toast.makeText(applicationContext, "계산 완료!", Toast.LENGTH_SHORT).show()
    }
}