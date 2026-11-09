package com.example.a10rd_calc

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

    lateinit var nameObj: EditText
    lateinit var passwordObj: EditText
    lateinit var emailObj: EditText
    lateinit var dateObj: EditText
    lateinit var phoneObj: EditText
    lateinit var resultObj: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        nameObj = findViewById(R.id.editName)
        passwordObj = findViewById(R.id.editPassword)
        emailObj = findViewById(R.id.editEmail)
        dateObj = findViewById(R.id.editDate)
        phoneObj = findViewById(R.id.editPhone)
        resultObj = findViewById(R.id.TextViewResult)
    }

    // 버튼 클릭 시 호출되는 함수 (View 매개변수 오류 해결 완료)
    fun onButtonClick(view: View) {
        if (nameObj.text.toString().isEmpty() ||
            passwordObj.text.toString().isEmpty() ||
            emailObj.text.toString().isEmpty() ||
            dateObj.text.toString().isEmpty() ||
            phoneObj.text.toString().isEmpty()) {

            Toast.makeText(this, "모든 항목을 입력해주세요.", Toast.LENGTH_SHORT).show()
        } else {
            resultObj.text = "성명 : ${nameObj.text}\n" +
                    "비밀번호 : ${passwordObj.text}\n" +
                    "이메일 : ${emailObj.text}\n" +
                    "생년월일 : ${dateObj.text}\n" +
                    "연락처 : ${phoneObj.text}"
        }
    }
}