const Listing=require("../models/listing");

module.exports.index=async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  };
  module.exports.renderNewForm=(req, res) => {
    res.render("listings/new.ejs");
  };
module.exports.showListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
      req.flash("error","Listing you requested for does not exits!");
      res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
  };
  module.exports.createListing=async (req, res) => {
    // let {title,description,image,price,country,location}=req.body; method 1 for the post request
    //  if(!req.body.listing){
    //   throw new expressError(400,"Sens valid data for listing");
    //  }
    let url=req.file.path;
    let filename=req.file.filename;
    
    const newListing = new Listing(req.body.listing);
    //here we are using the instance of the new created listing
    newListing.owner=req.user._id;
    newListing.image={url,filename};
    await newListing.save();
    req.flash("success","New Listings Created!");
    //for flashing the listing created 
    res.redirect("/listings");
  };
  module.exports.renderEditForm=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
      req.flash("error","Listing you requested for does not exits!");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  };
  module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}/`);
  };
  module.exports.destroyListing=async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listings Deleted!");
    res.redirect("/listings");
  };