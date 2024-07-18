
//Called when application is started.
function OnStart()
{    
    //Lock screen orientation to Portrait.
    app.SetOrientation( "Portrait" )
    
	//Create the main app layout.
	layMain = app.CreateLayout( "Linear", "FillXY" );
	layMain.SetBackColor( "#ffffff" );
	
	//Create an 'Action Bar' and drawer.
	CreateActionBar()
	CreateDrawer()
	
	//Create the app content layout.
	layContent = app.AddLayout( layMain, "Linear", "VCenter,FillXY" );
    layContent.SetSize( 1, 0.95 );
    
    //Create main content.
    CreateContent()
    
	//Create a text label and add it to main layout.
	txt = app.AddText( layMain, "<-- swipe from left" )
	txt.SetTextSize( 24, "dip" )
	
	//Add main layout and drawer to app.	
	app.AddLayout( layMain )
	app.AddDrawer( drawerScroll, "Left", drawerWidth )
}

//Create the main app content.
function CreateContent()
{
	//Create a text label heart icon.
	txtIcon = app.AddText( layContent, "[fa-home]", 0.8, 0.12, "FontAwesome" )
	txtIcon.SetTextColor( "#4285F4" );
	txtIcon.SetTextSize( 80 )
	
	//Create text with an external link.
    var txt = "<p><font color=#4285F4><big>Welcome</big></font></p><br>" + 
    "<p><a href=https://play.google.com/store>Play Store</a></p>"
    txtContent = app.AddText( layContent, txt, 1, -1, "Html,Link" )
    txtContent.SetTextSize( 18 )
}

//Create an action bar at the top.
function CreateActionBar()
{
    //Create Card layout for top bar (with drop shadow).
    layBar = app.AddLayout( layMain, "Card", "Horizontal,FillX" )
    layBar.SetElevation( 10 )
    layBar.SetBackColor( "#4285F4" )
    
    //Add title text.
    txtBarTitle = app.AddText( layBar, "Home", 1 )
    txtBarTitle.SetPadding( 12,10,12,10, "dip" )
    txtBarTitle.SetTextSize( 22 )
    txtBarTitle.SetTextColor( "#ffffff" )
    
    //Create title layout.
    layBarTitle = app.AddLayout( layBar, "Linear", "Horizontal,Left" )
    
    //Add hamburger icon .
    txtBurger = app.AddText( layBarTitle, "[fa-bars]", -1,-1, "FontAwesome" )
    txtBurger.SetPadding( 12,12,12,10, "dip" )
    txtBurger.SetTextSize( 24 )
    txtBurger.SetTextColor( "#eeeeee" )
    txtBurger.SetOnTouchUp( function(){app.OpenDrawer()} )
    
    //Add menu icon.
    txtMenu = app.AddText( layBarTitle, "[fa-ellipsis-v]", -1,-1, "FontAwesome,Right" );
    txtMenu.SetPadding( 12,14,16,10, "dip" )
    txtMenu.SetMargins( 0.8 )
    txtMenu.SetTextSize( 24 )
    txtMenu.SetTextColor( "#eeeeee" );
    txtMenu.SetOnTouchUp( function(){app.ShowPopup("Todo!")} )
}

//Create the drawer contents.
function CreateDrawer()
{
    //Create a layout for the drawer.
	//(Here we also put it inside a scroller to allow for long menus)
	drawerWidth = 0.75;
    drawerScroll = app.CreateScroller( drawerWidth, -1, "FillY" )
    drawerScroll.SetBackColor( "White" )
	layDrawer = app.CreateLayout( "Linear", "Left" )
	drawerScroll.AddChild( layDrawer )
	
	//Create layout for top of drawer.
	layDrawerTop = app.CreateLayout( "Absolute" )
	layDrawerTop.SetBackColor( "#4285F4" )
	layDrawerTop.SetSize( drawerWidth, 0.23 )
	layDrawer.AddChild( layDrawerTop )
	
	//Add an icon to top layout.
	var img = app.AddImage( layDrawerTop, "/Sys/Img/Icon.png", 0.15 )
	img.SetPosition( drawerWidth*0.06, 0.04 )
	
	//Add user name to top layout.
	var txtUser = app.AddText( layDrawerTop, "Dave",-1,-1,"Bold")
	txtUser.SetPosition( drawerWidth*0.07, 0.155 )
	txtUser.SetTextColor( "White" )
	txtUser.SetTextSize( 13.7, "dip" )
	
	//Add user email to top layout.
	txtEmail = app.AddText( layDrawerTop, "david@droidscript.org")
	txtEmail.SetPosition( drawerWidth*0.07, 0.185 )
	txtEmail.SetTextColor( "#bbffffff" )
	txtEmail.SetTextSize( 14, "dip" )
	
	//Create menu layout.
	var layMenu = app.CreateLayout( "Linear", "Left" )
	layDrawer.AddChild( layMenu )
	
    //Add a list to menu layout (with the menu style option).
    var listItems = "Home::[fa-home],Social::[fa-users],Promotions::[fa-tag]";
    lstMenu1 = app.AddList( layMenu, listItems, drawerWidth, -1, "Menu,Expand" )
    lstMenu1.SetColumnWidths( -1, 0.35, 0.18 )
    lstMenu1.SelectItemByIndex( 0, true )
    lstMenu1.SetItemByIndex( 0, "Home", 21 )
    lstMenu1.SetOnTouch( lstMenu_OnTouch )
    
    //Add seperator to menu layout.
    var sep = app.AddImage( layMenu, null, drawerWidth,0.001,"fix", 2,2 )
    sep.SetSize( -1, 1, "px" )
    sep.SetColor( "#cccccc" )
    
    //Add title between menus.
	txtTitle = app.AddText( layMenu, "All labels",-1,-1,"Left")
	txtTitle.SetTextColor( "#666666" )
	txtTitle.SetMargins( 16,12,0,0, "dip" )
	txtTitle.SetTextSize( 14, "dip" )
	
    //Add a second list to menu layout.
    var listItems = "Starred::[fa-star],Important::[fa-flag],Settings::[fa-cog]";
    lstMenu2 = app.AddList( layMenu, listItems, drawerWidth, -1, "Menu,Expand" )
    lstMenu2.SetColumnWidths( -1, 0.35, 0.18 )
    lstMenu2.SetOnTouch( lstMenu_OnTouch )
}

//Handle menu item selection.
function lstMenu_OnTouch( title, body, type, index )
{
    //Close the drawer.
    app.CloseDrawer( "Left" )
    
    //Highlight the chosen menu item in the appropriate list.
    if( this==lstMenu1 ) lstMenu2.SelectItemByIndex(-1)
    else lstMenu1.SelectItemByIndex(-1)
    this.SelectItemByIndex( index, true )
    
    //Update title and page contents.
    txtBarTitle.SetText( title )
    txtIcon.SetText( type )
    txtContent.SetHtml( "<p><font color=#4285F4><big>"+title+"</big></font></p>" )
    
    console.log( title )
}

//Called when a drawer is opened or closed.
function OnDrawer( side, state )
{
    console.log( side + " : " + state )
}

