Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'profile', to: "profile#index"
  patch 'profile', to: "profile#update"

  root "home#index"

end
