json.array! @product do |product|
    json.id product.id
    json.title product.title
    json.url api_product_url(product)
end
