Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do 
      resource :subscribes, only: [:index, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:destroy, :all, :create] do
      get 'all', on: :collection
      resource :updoots, only: [:create, :destroy] 
      resource :downdoots, only: [:create, :destroy]
    end
    resources :subcattits, only: [:show, :create, :index] do
      resource :subscribes, only: [:create, :destroy]
      resources :posts, only: [:show, :index]
    end
    resources :frontpage, only: [:index]
    end
  end
    get '*path', to: 'static_pages#root', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  } 
  
end
