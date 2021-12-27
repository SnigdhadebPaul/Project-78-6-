var images = ["https://www.eurekabookstore.com/public/thumbs/products/2020/10/3623/Family_400_600.jpg","IMG_20210310_215311","IMG_20201225_131245","IMG_20201225_131230","IMG_20200416_193240","IMG_20210310_214627"];
var names = ["Family Book","Me", "Mom", "Dad", "Grandmother", "Grandfather"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i]; 
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
