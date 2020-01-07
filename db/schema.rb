# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_07_013929) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "parent_id"
    t.integer "author_id", null: false
    t.integer "post_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_id"], name: "index_comments_on_parent_id"
  end

  create_table "feeds", force: :cascade do |t|
    t.integer "user_id", null: false
    t.bigint "subbed_users_id"
    t.bigint "subbed_cattits_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subbed_cattits_id"], name: "index_feeds_on_subbed_cattits_id"
    t.index ["subbed_users_id"], name: "index_feeds_on_subbed_users_id"
    t.index ["user_id"], name: "index_feeds_on_user_id", unique: true
  end

  create_table "posts", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "subcattit_id", null: false
    t.string "title", null: false
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_posts_on_author_id"
    t.index ["subcattit_id"], name: "index_posts_on_subcattit_id"
  end

  create_table "subcattits", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.integer "moderator_ids", default: [], array: true
    t.integer "subscriber_ids", default: [], array: true
    t.integer "num_subscribers", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_subcattits_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "subbed_cattits", default: [], array: true
    t.integer "subbed_users", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
  end

  create_table "votings", force: :cascade do |t|
    t.bigint "updoots_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["updoots_id"], name: "index_votings_on_updoots_id"
  end

end
