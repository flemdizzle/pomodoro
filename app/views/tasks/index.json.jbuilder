json.array!(@tasks) do |task|
  json.extract! task, :id, :task, :type, :complete, :user_id, :team_id
  json.url task_url(task, format: :json)
end
