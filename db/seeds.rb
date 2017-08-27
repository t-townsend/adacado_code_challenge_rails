
require 'httparty'
require 'uri'
require 'json'




results = HTTParty.get(ENV["URL"])
hash = Hash.from_xml(results.body)

item_hash = hash["ItemSearchResponse"]["Items"]["Item"]

item_hash.class



10.times do |index|

        Product.create!(title: item_hash[index]["ItemAttributes"]["Title"],
                        image: item_hash[index]["MediumImage"]["URL"],
                        description: item_hash[index]["EditorialReviews"]["EditorialReview"]["Content"],
                        price: item_hash[index]["OfferSummary"]["LowestNewPrice"]["FormattedPrice"])
    
end
   
  p "Created #{Product.count} products"