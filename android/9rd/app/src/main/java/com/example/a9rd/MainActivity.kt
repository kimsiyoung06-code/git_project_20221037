package com.example.a9rd

import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {

    // 1. 객체 변수 선언
    lateinit var nameObj: EditText     // 성명 객체변수
    lateinit var passwordObj: EditText // 비밀번호 객체변수[cite: 9]
    lateinit var emailObj: EditText    // 이메일 객체변수[cite: 9]
    lateinit var dateObj: EditText     // 생년월일 객체변수[cite: 9]
    lateinit var phoneObj: EditText    // 연락처 객체변수[cite: 9]
    lateinit var resultObj: TextView   // 결과보기 객체변수[cite: 9]

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge() //[cite: 9]
        setContentView(R.layout.activity_main) //[cite: 9]

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets -> //[cite: 9]
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars()) //[cite: 9]
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom) //[cite: 9]
            insets //[cite: 9]
        }

        // 2. XML ID 매핑
        nameObj = findViewById(R.id.editName) //[cite: 9]
        passwordObj = findViewById(R.id.editPassword) //[cite: 9]
        emailObj = findViewById(R.id.editEmail) //[cite: 9]
        dateObj = findViewById(R.id.editDate) //[cite: 9]
        phoneObj = findViewById(R.id.editPhone) //[cite: 9]
        resultObj = findViewById(R.id.TextViewResult) //[cite: 9]
    }

    // 3. 버튼 클릭 함수 (onButtonClick)
    fun onButtonClick(view: View?) { //[cite: 9]
        // 빈칸이 하나라도 있을 때 처리
        if (nameObj.text.toString().isEmpty() ||
            passwordObj.text.toString().isEmpty() ||
            emailObj.text.toString().isEmpty() ||
            dateObj.text.toString().isEmpty() ||
            phoneObj.text.toString().isEmpty()) { //[cite: 9]

            Toast.makeText(this, "모든 항목을 입력해주세요.", Toast.LENGTH_SHORT).show()
        } else {
            // 결과 출력 (문자열 연결 오류 수정 완료)
            resultObj.setText(
                "성명 : ${nameObj.text}\n" +
                        "비밀번호 : ${passwordObj.text}\n" +
                        "이메일 : ${emailObj.text}\n" +
                        "생년월일 : ${dateObj.text}\n" +
                        "연락처 : ${phoneObj.text}"
            )
        }
    }
}