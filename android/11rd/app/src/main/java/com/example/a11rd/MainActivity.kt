package com.example.a11rd

import android.os.Bundle
import android.view.View
import android.widget.ImageButton
import android.widget.ImageView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {

    lateinit var btObj1: ImageButton
    lateinit var btObj2: ImageButton
    lateinit var btObj3: ImageButton
    lateinit var btObj4: ImageButton
    lateinit var ivObj: ImageView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, i ->
            val b = i.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(b.left, b.top, b.right, b.bottom)
            i
        }

        btObj1 = findViewById(R.id.button1)
        btObj2 = findViewById(R.id.button2)
        btObj3 = findViewById(R.id.button3)
        btObj4 = findViewById(R.id.button4)
        ivObj = findViewById(R.id.imageView2)

        btObj1.setOnClickListener(View.OnClickListener {
            ivObj.setVisibility(View.VISIBLE)
            ivObj.setImageResource(R.drawable.snail2)
            Toast.makeText(getApplicationContext(), "틀렸습니다", Toast.LENGTH_SHORT).show()
        })

        btObj2.setOnClickListener(View.OnClickListener {
            ivObj.setVisibility(View.VISIBLE)
            ivObj.setImageResource(R.drawable.snail3)
            Toast.makeText(getApplicationContext(), "맞았습니다", Toast.LENGTH_SHORT).show()
        })

        btObj3.setOnClickListener(View.OnClickListener {
            ivObj.setVisibility(View.VISIBLE)
            ivObj.setImageResource(R.drawable.snail4)
            Toast.makeText(getApplicationContext(), "틀렸습니다", Toast.LENGTH_SHORT).show()
        })

        btObj4.setOnClickListener(View.OnClickListener {
            ivObj.setVisibility(View.VISIBLE)
            ivObj.setImageResource(R.drawable.snail5)
            Toast.makeText(getApplicationContext(), "틀렸습니다", Toast.LENGTH_SHORT).show()
        })

        findViewById<View>(R.id.resetButton).setOnClickListener(View.OnClickListener {
            ivObj.setVisibility(View.GONE)
        })
    }
}