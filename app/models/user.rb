class User < ApplicationRecord
   
    has_secure_password
    
      validates :first_name, presence: true
      validates :last_name, presence: true
      
    
      VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
      validates :email, presence: true,
                        uniqueness: { case_sensitive: false },
                        format: VALID_EMAIL_REGEX
                        
    
      before_validation :downcase_email
      before_create :generate_api_token

      private
      
        
        def generate_api_token
          loop do
            self.api_token = SecureRandom.urlsafe_base64(32)
            break unless User.exists?(api_token: self.api_token)
          end
        end
      
        def downcase_email
          self.email.downcase! if email.present?
        end
    
end
