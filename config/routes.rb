Rails.application.routes.draw do
 root "products#get_product"
 
    namespace :api do
        namespace :v1 do
            resources :products, only: [:index, :show]
        end
    end
  
end


