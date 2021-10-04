class UserItem < ApplicationRecord
  belongs_to :user
  belongs_to :item

  validates :item_id, uniqueness: {scope: [:user_id], message: "This item is already on your shopping list!"}
end
