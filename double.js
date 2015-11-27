//I started with the image I wanted (inImage)
var inImage = new SimpleImage("chapel.png");
print();
var bigImage = 
      new SimpleImage((inImage.getWidth() *2) , (inImage.getHeight() * 2));
for(var px of bigImage.values() ) {
    var x  = Math.floor(px.getX() /2);
    var y = Math.floor(px.getY()/2);
    var ip = inImage.getPixel(x,y);
    px.setRed(ip.getRed());
    px.setGreen(ip.getGreen());
    px.setBlue(ip.getBlue());
    
    
}
print(inImage);
print(bigImage);


