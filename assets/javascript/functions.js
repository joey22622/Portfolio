let bioHidden = true;
function toggleBio () {
    console.log("bioToggle");
    if(bioHidden){
        $(".bio-hidden").removeClass("bio-hidden");
        $(".extended-toggle").addClass("rotated");
        bioHidden = false;
    } else {
        $(".bio-section").addClass("bio-hidden");
        $(".extended-toggle").removeClass("rotated");
        bioHidden = true;
    }
    $(".extended-toggle").blur();
}

$(".extended-toggle").click(toggleBio);
$(".logo").click(toggleBio); 