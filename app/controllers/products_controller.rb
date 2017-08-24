class ProductsController < ApplicationController

    def get_product
        @product = AmazonAPI.new
        
        render json: @product
       end
       
end
