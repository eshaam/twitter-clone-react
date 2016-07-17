class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :username, {
    :uniqueness => { :case_sensitive => true }, 
    :presence => true
  }

  validates :last_name,:first_name,
  :presence => true,
  :length => { :within => 1..255, :allow_blank => true }

end
