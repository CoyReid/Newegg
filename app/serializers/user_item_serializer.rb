class UserItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :item
  def cartItems
    current_user.user_items.map {|item| item.item}
  end
end
