Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"
  
  namespace :api do
    namespace :v1 do
      namespace :candidates do
        post "sign_up", to: 'candidates#create'
        post "sign_in", to: 'session#create'
      end
      namespace :users do
        post "sign_in", to: 'session#create'
      end
      resources :vacancies
      resources :job_categories
      resources :job_positions
    end
  end
end
