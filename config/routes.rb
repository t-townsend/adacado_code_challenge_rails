Rails.application.routes.draw do
 root "products#get_product"
 
    namespace :api do
        namespace :v1 do
            resources :products
        end
    end

    resources :users, only: [:new, :create]
  
end


