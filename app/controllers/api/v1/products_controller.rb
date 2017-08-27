class Api::V1::ProductsController < ApplicationController

    def show
        @product = Product.find params[:id]
        render json: @product
    end

    def index
        @product = Product.all
        render json: @product
    end
end
