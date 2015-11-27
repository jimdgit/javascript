// steganography
function pixchange(pixval){
    var x = Math.floor(pixval/16) * 16;
    return x;
}
function chop2hide(image){
    for(var px of image.values()){
        px.setRed(pixchange(px.getRed()));
        px.setGreen(pixchange(px.getGreen()));
        px.setBlue(pixchange(px.getBlue()));
    }
    return image;
}
function shift(im){
  var nim = new SimpleImage(im.getWidth(), 
                            im.getHeight());
  for(var px of im.values()){
    var x = px.getX();
    var y = px.getY();
    var npx = nim.getPixel(x,y);
    npx.setRed(Math.floor(px.getRed()/16));
    npx.setGreen(Math.floor(px.getGreen()/16));
    npx.setBlue(Math.floor(px.getBlue()/16));
  }
  return nim;
}
function combine(im1,im2)
{
     var nim = new SimpleImage(im1.getWidth(), 
                            im1.getHeight());
    for(var px of nim.values())
    {
      var px1 = im1.getPixel(px.getX(),px.getY()); 
      var px2 = im2.getPixel(px.getX(),px.getY());
      px.setRed(px1.getRed() + px2.getRed());
      px.setGreen(px1.getGreen() + px2.getGreen());
      px.setBlue(px1.getBlue() + px2.getBlue());
        
    }
    return nim;                        
}
function showPixel(im)
{
    var px = im.getPixel(50,60);
    print("R= 0x" + px.getRed().toString(16) + " G= 0x" + px.getGreen().toString(16) + " B= 0x" + px.getBlue().toString(16));
}
var start = new SimpleImage("usain.jpg");
var hide = new SimpleImage("skyline.jpg");

start = chop2hide(start);
hide = shift(hide);
print(start);
print(hide);
final = combine(start , hide);
print(final);



