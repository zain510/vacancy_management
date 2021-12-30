Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   resource :candidates, only: [:create]
   resources :sign_in, only: [:create]
   post "admin/login", to: 'sign_in#login'
   root "homes#index"
   resource :vacancies
   resource :users
   resource :job_categories
   resource :job_positions
end
