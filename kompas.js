function OnStart() {
    lay = app.CreateLayout("Linear", "VCenter,FillXY");

    // Membuat teks untuk menampilkan nilai azimuth
    txt = app.CreateText("", 0.8, 0.1, "Multiline");
    lay.AddChild(txt);

    // Membuat teks untuk menampilkan arah kompas
    txtDirection = app.CreateText("", 0.8, 0.1, "Multiline");
    lay.AddChild(txtDirection);

    // Membuat gambar jarum kompas
    img = app.CreateImage(null, 0.5, 0.5);
    img.SetImage("Img/jarum.png");
    lay.AddChild(img);

    app.AddLayout(lay);

    // Membuat sensor orientasi
    sns = app.CreateSensor("Orientation");
    sns.SetOnChange(sns_OnChange);
    sns.Start();
}

function sns_OnChange(azimuth, pitch, roll, time) {
    var msg = "Azimuth = " + azimuth.toFixed(1) + "°";
    txt.SetText(msg);

    // Mengatur rotasi jarum kompas sesuai dengan nilai azimuth
    var nilai = -azimuth.toFixed();
    img.Rotate(nilai);

    // Menentukan arah kompas berdasarkan nilai azimuth
    var direction;
    if (azimuth >= 337.5 || azimuth < 22.5) {
        direction = "Utara";
    } else if (azimuth >= 22.5 && azimuth < 67.5) {
        direction = "Timur Laut";
    } else if (azimuth >= 67.5 && azimuth < 112.5) {
        direction = "Timur";
    } else if (azimuth >= 112.5 && azimuth < 157.5) {
        direction = "Tenggara";
    } else if (azimuth >= 157.5 && azimuth < 202.5) {
        direction = "Selatan";
    } else if (azimuth >= 202.5 && azimuth < 247.5) {
        direction = "Barat Daya";
    } else if (azimuth >= 247.5 && azimuth < 292.5) {
        direction = "Barat";
    } else if (azimuth >= 292.5 && azimuth < 337.5) {
        direction = "Barat Laut";
    }

    txtDirection.SetText("Arah: " + direction);
}
