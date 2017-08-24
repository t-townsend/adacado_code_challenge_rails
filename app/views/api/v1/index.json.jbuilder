json.array! @product do |product|
    json.id product.id
    json.title product.titlejson.url api_product_url(product)
end
