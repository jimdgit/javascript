
// http://www.dukelearntoprogram.com/course1/doc/index.php#simpleimage
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
// test code
var start = new SimpleImage("usain.jpg");
var hide = new SimpleImage("astrachan.jpg");
print(start);
print(hide);
start = crop(start,hide);
hide = crop(hide,start);
print(start.getWidth() + " , " + start.getHeight());

print(start);
print(hide.getWidth() + " , " + hide.getHeight());
print(hide);
