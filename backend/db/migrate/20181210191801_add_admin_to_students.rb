class AddAdminToStudents < ActiveRecord::Migration[5.2]
  def change
    add_column :students, :admin, :boolean, default: false
    add_index :students, :admin
  end
end
