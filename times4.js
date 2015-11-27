//I started with the image I wanted (inImage)
var inImage = new SimpleImage("chapel.png");
print();
var w = inImage.getWidth();
var h = inImage.getHeight();
var bigImage = 
      new SimpleImage((inImage.getWidth() *2) , (inImage.getHeight() * 2));
for(var px of bigImage.values() ) {
    var x  = px.getX();
    var y =  px.getY();
    if( x >= w) x -= w;
    if( y >= h) y -= h;
    var ip = inImage.getPixel(x,y);
    px.setRed(ip.getRed());
    px.setGreen(ip.getGreen());
    px.setBlue(ip.getBlue());
    
    
}
print(inImage);
print(bigImage);