function OnStart()
{
    // Buat layout utama.
    layMain = app.CreateLayout("Absolute", "FillXY");
    
    // Buat dan tambahkan layout pertama.
    lay1 = app.AddLayout(layMain,"Linear", "Vertical");
    lay1.SetBackColor("#ff0000");
    lay1.SetPosition(0, 0, 1, 0.5); // Posisi dan ukuran: (x, y, width, height)
   
    
    // Buat dan tambahkan layout kedua.
    lay2 = app.AddLayout(layMain,"Linear", "Vertical");
    lay2.SetBackColor("#00ffff");
    lay2.SetPosition(0, 0.2, 1, 0.2); // Posisi dan ukuran: (x, y, width, height)
  
    
    // Buat dan tambahkan layout ketiga.
    lay3 = app.AddLayout(layMain,"Linear", "Horizontal,Top");
    lay3.SetBackColor("#ffffff");
    lay3.SetPosition(0, 0.93,1, 1); // Posisi dan ukuran: (x, y, width, height)


    

 x=app.AddText(lay1, "[fa-chevron-circle-left]", -1, -1, "fontAwesome"),
     

      nav = [
        app.AddText(lay3, "[fa-chevron-circle-left]", -1, -1, "fontAwesome"),
        app.AddText(lay3, "[fa-chevron-circle-left]", -1, -1, "fontAwesome"),
        app.AddText(lay3, "[fa-chevron-circle-left]", -1, -1, "fontAwesome"),
        app.AddText(lay3, "[fa-chevron-circle-left]", -1, -1, "fontAwesome"),
        app.AddText(lay3, "[fa-chevron-circle-left]", -1, -1, "fontAwesome"),
    ];
    
   for (var i=0; i<5; i++){
   nav[i].SetTextColor( "#5555aa" );
    nav[i].SetBackColor( "#00000000" );
    nav[i].SetTextSize( 56 );
  // but.SetOnTouchDown( but_OnTouch );
    nav[i].SetMargins( 0.035, 0.01, 0.035, 0.01 )
    nav[2].SetTextSize(70)
    nav[2].SetPadding( 0,-.01,0,0)
}
    
    // Tambahkan layout utama ke aplikasi.
    app.AddLayout(layMain);
}