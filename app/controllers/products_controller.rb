require 'rubygems'
require 'httparty'
require 'net/http'

class ProductsController < ApplicationController
    include HTTParty

    def get_product
        keywords = "boardgames"
        p = AmazonAPI.new
        url = p.by_keywords(keywords)
        results = HTTParty.get(ENV["URL"])
        render json: results  
        

        first_matching_item_hash = results["ItemSearchResponse"]["Items"]["Item"].first
        matching_product = Product.new_from_hash(first_matching_item_hash)
    
        matching_product.display
    end
       
end
