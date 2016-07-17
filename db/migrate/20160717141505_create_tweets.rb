class CreateTweets < ActiveRecord::Migration[5.0]
  def change
    create_table :tweets, id: :uuid do |t|
      t.uuid :user_id
      t.text :body
      t.timestamps
    end
    add_index :tweets, :user_id
  end
end
