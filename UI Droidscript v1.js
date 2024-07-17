class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Add a callback handler for `onChange` event
        this.bmn.setOnChange( this.onChange )

        // Button to show the labels
        this.btn = ui.addButton(this.main, "Show Labels")
        this.btn.setOnTouch( this.showLabels )

        // Button to hide the labels
        this.btn1 = ui.addButton(this.main, "Hide Labels")
        this.btn1.setOnTouch( this.hideLabels )
    }

    showLabels( )
    {
        this.bmn.showLabels()
    }

    hideLabels()
    {
        this.bmn.hideLabels()
    }

    onChange(text, index)
    {
        ui.showPopup( text )
    }
}