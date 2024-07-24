var chartExists = false;

function OnStart()
{
    // Buat layout utama.
    layMain = app.CreateLayout("Absolute", "FillXY");
    
    // Buat dan tambahkan layout navigasi.
    layNav = app.CreateLayout("Linear", "Horizontal,Top");
    layNav.SetBackColor("blue");
    layNav.SetPosition(0, 0.93, 1, 0.07); // Posisi dan ukuran: (x, y, width, height)
    layMain.AddChild(layNav);
    
    // Buat layout konten.
    lay1 = app.CreateLayout("Linear", "Vertical");
    lay1.SetBackColor("#00ffff");
    lay1.SetPosition(0, 0, 1, 0.93);
    layMain.AddChild(lay1);
    
    lay2 = app.CreateLayout("Linear", "Vertical");
    lay2.SetBackColor("#ff00ff");
    lay2.SetPosition(0, 0, 1, 0.93);
    layMain.AddChild(lay2);
    
    lay3 = app.CreateLayout("Linear", "Vertical");
    lay3.SetBackColor("#ffff00");
    lay3.SetPosition(0, 0, 1, 0.93);
    layMain.AddChild(lay3);
    
    lay4 = app.CreateLayout("Linear", "Vertical");
    lay4.SetBackColor("#00ff00");
    lay4.SetPosition(0, 0, 1, 0.93);
    layMain.AddChild(lay4);
    
    lay5 = app.CreateLayout("Linear", "Vertical");
    lay5.SetBackColor("#0000ff");
    lay5.SetPosition(0, 0, 1, 0.93);
    layMain.AddChild(lay5);
    
    // Tambahkan teks ke setiap layout.
    var text1 = app.CreateText("Ini layout 1");
    lay1.AddChild(text1);
    
    var text2 = app.CreateText("Ini layout 2");
    lay2.AddChild(text2);
    
    var text3 = app.CreateText("Ini layout 3");
    lay3.AddChild(text3);
    
    var text4 = app.CreateText("Ini layout 4");
    lay4.AddChild(text4);
    
    var text5 = app.CreateText("Ini layout 5");
    lay5.AddChild(text5);
    
    // Tambahkan ikon FontAwesome ke layout navigasi.
    nav = [
        app.AddText(layNav, " [fa-database] ", -1, -1, "fontAwesome"),
        app.AddText(layNav, "[fa-dashboard]", -1, -1, "fontAwesome"),
        app.AddText(layNav, "[fa-plus-square-o]", -1, -1, "fontAwesome"),
        app.AddText(layNav, "[fa-pie-chart]", -1, -1, "fontAwesome"),
        app.AddText(layNav, "[fa-user]", -1, -1, "fontAwesome"),
    ];
    
    // Warna awal ikon.
    var defaultColor = "white";
     for (var i = 0; i < nav.length; i++) {
        nav[i].SetTextColor(defaultColor);
        nav[i].SetTextSize(36);
        nav[i].SetMargins(0.050, 0.01, 0.050, 0.01);
    }
    
    // Fungsi untuk mengubah warna ikon dan menampilkan layout yang sesuai.
    function changeColor(clickedIcon, layoutToShow) {
        requestAnimationFrame(function() {
            for (var i = 0; i < nav.length; i++) {
                if (nav[i] === clickedIcon) {
                    nav[i].SetTextColor("black");
                    nav[i].Animate("Bounce");
                } else {
                    nav[i].SetTextColor(defaultColor);
                }
            }
            lay1.Hide();
            lay2.Hide();
            lay3.Hide();
            lay4.Hide();
            lay5.Hide();
            layoutToShow.Show();
        });
    }
    
   
    
    // Tambahkan event listener untuk setiap ikon navigasi.
    nav[0].SetOnTouch(function() {
        changeColor(this, lay1);
    });
    nav[1].SetOnTouch(function() {
        changeColor(this, lay2);
    });
    nav[2].SetOnTouch(function() {
        changeColor(this, lay3);
    });
    nav[3].SetOnTouch(function() {
        changeColor(this, lay4);
    });
    nav[4].SetOnTouch(function() {
        changeColor(this, lay5);
    });
    
    // Tampilkan layout utama.
    app.AddLayout(layMain);
    
    // Sembunyikan semua layout kecuali yang pertama.
    lay2.Hide();
    lay3.Hide();
    lay4.Hide();
    lay5.Hide();
    
    // Muat file eksternal dan inisialisasi rotasi pada lay1.
    app.LoadScript("rotate.js", function() {
       // InitializeRotation(lay1);
    });
}