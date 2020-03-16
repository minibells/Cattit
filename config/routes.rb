Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
  # get *path, to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:destroy, :all, :create] do
        get 'all', on: :collection
        resource :updoots, only: [:create, :destroy] 
        resources :updoots, only: [:index, :all] do
          get 'all', on: :collection
        end
        resource :downdoots, only: [:create, :destroy, :index]
        resources :downdoots, only: [:index, :all] do 
          get 'all', on: :collection
        end
    end
    resources :subcattits, only: [:show, :create, :index] do
       resources :posts, only: [:show, :index]
       
    end
    resources :frontpage, only: [:index]
      # resources :posts, only: [:index]
    end

    get '*path', to: 'static_pages#root', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  } 
  
end
