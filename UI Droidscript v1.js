var chartExists = false;

function OnStart()
{
    // Buat layout utama.
    layMain = app.CreateLayout("Absolute", "FillXY");
    
    // Buat dan tambahkan layout kedua.
    lay2 = app.AddLayout(layMain,"Linear", "Vertical");
    lay2.SetBackColor("#00ffff");
    lay2.SetPosition(0, 0, 1, 1); // Posisi dan ukuran: (x, y, width, height)
    
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
        requestAnimationFrame(function() {
            for (var i = 0; i < nav.length; i++) {
                if (nav[i] === clickedIcon) {
                    nav[i].SetTextColor("black");
                    nav[i].Animate("Bounce");
                } else {
                    nav[i].SetTextColor(defaultColor);
                }
            }
        });
    }
    
    for (var i = 0; i < nav.length; i++) {
        nav[i].SetTextColor(defaultColor);
        nav[i].SetTextSize(36);
        nav[i].SetMargins(0.050, 0.01, 0.050, 0.01);
        
        // Tambahkan event listener untuk mengubah warna saat diklik.
        nav[i].SetOnTouch(function() {
            changeColor(this);
        });
    }
    
    // Tambahkan event listener untuk memanggil fungsi Chart saat nav[1] diklik.
        nav[1].SetOnTouch(function() {
        changeColor(this);
        Chart();
    });
    
    // Tambahkan layout utama ke aplikasi.
    app.AddLayout(layMain);
    
}




app.LoadPlugin('ChartJS');
function Chart()
{
    if (!chartExists) {//cek apakah chart sudah ada
        chart = app.LoadChartJS();
        
        data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [2, 5, 3, 15, 10],
                    backgroundColor: ["#9C27B0", "#5E35B1", "#039BE5", "#FF9800", "#26A69A"]
                }
            ]
        };
        
        pie = chart.CreateChart(data, 'pie', 0.9, 0.5);
        lay2.AddChild(pie);
        
        chartExists = true;
    }}