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
function unshift(im){
  var nim = new SimpleImage(im.getWidth(), 
                            im.getHeight());
  for(var px of im.values()){
    var x = px.getX();
    var y = px.getY();
    var npx = nim.getPixel(x,y);
    npx.setRed(Math.floor(px.getRed()*16) & 0xf0);
    npx.setGreen(Math.floor(px.getGreen()*16) & 0xf0);
    npx.setBlue(Math.floor(px.getBlue()*16) & 0xf0);
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
function  crop(im1,im2) {
    var h =(im1.getHeight() > im2.getHeight() )?  im2.getHeight() : im1.getHeight() ;
    var w = (im1.getWidth() > im2.getWidth()) ? im2.getWidth() :im2.getWidth() ;
    //print(h);
    //print(w);
    var nm1 = new SimpleImage(w,h);
    for(var px of im1.values())
    {
        if( px.getX() < w && px.getY() < h) {
            nm1.setPixel( px.getX(),px.getY(),px);
        }
    }
    //print(nm1);
    return nm1;
}
function showPixel(im)
{
    var px = im.getPixel(50,60);
    print("R= 0x" + px.getRed().toString(16) + " G= 0x" 
	              + px.getGreen().toString(16) + " B= 0x" 
				  + px.getBlue().toString(16));
}
var start = new SimpleImage("usain.jpg");
var hide = new SimpleImage("skyline.jpg");
start = crop(start,hide);
hide = crop(hide,start);
showPixel(start);
start = chop2hide(start);
showPixel(start);
print(start);
showPixel(hide);
hide = shift(hide);
showPixel(hide);

print(hide);
final = combine(start , hide);
showPixel(final);
print(final);
decoded = unshift(final);
print(decoded);



