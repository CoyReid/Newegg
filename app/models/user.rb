class User < ApplicationRecord
  has_many :user_items
  has_many :items, through: :user_items

  validates :username, presence: true, uniqueness: true
  has_secure_password
end
