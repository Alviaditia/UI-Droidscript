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
    lay3.SetBackColor("red");
    lay3.SetPosition(0, 0.93, 1, 1); // Posisi dan ukuran: (x, y, width, height)
    
    // Tambahkan ikon FontAwesome ke layout ketiga.
    nav = [
        app.AddText(lay3, " [fa-database] ", -1, -1, "fontAwesome"),
        app.AddText(lay3, "[fa-dashboard]", -1, -1, "fontAwesome"),
        app.AddText(lay3, "[fa-plus-square-o]", -1, -1, "fontAwesome"),
        app.AddText(lay3, "[fa-pie-chart]", -1, -1, "fontAwesome"),
        app.AddText(lay3, "[fa-user]", -1, -1, "fontAwesome"),
    ];
    
    // Warna awal ikon.
    var defaultColor = "white";
    
    // Fungsi untuk mengubah warna ikon.
    function changeColor(clickedIcon) {
        for (var i = 0; i < nav.length; i++) {
            if (nav[i] === clickedIcon) {
                nav[i].SetTextColor("black");
            } else {
                nav[i].SetTextColor(defaultColor);
            }
        }
    }
    
    for (var i = 0; i < nav.length; i++) {
        nav[i].SetTextColor(defaultColor);
        nav[i].SetBackColor("");
        nav[i].SetTextSize(36);
        nav[i].SetMargins(0.050, 0.01, 0.050, 0.01);
        
        // Tambahkan event listener untuk mengubah warna saat diklik.
        nav[i].SetOnTouch(function() {
            changeColor(this);
        });
    }
    
    // Tambahkan layout utama ke aplikasi.
    app.AddLayout(layMain);
}
