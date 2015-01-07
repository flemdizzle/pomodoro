require 'rails_helper'

describe "the truth" do 
  it "is the truth" do
    expect(true).to be(true)
  end
end

describe Task do
  before(:each) do
    @task = Task.create(task: "hello")
    @task2 = Task.create(task: "world", complete: true)
  end

  it "complete scope does not contain incomplete tasks" do
    expect(Task.all.complete).to_not include(:complete => false)
  end

  it "not_complete scope does not contain incomplete tasks" do
    expect(Task.all.not_complete).to_not include(:complete => true)
  end
  # it "stuff" do
  #   expect(Task.butts).to eq("butts")
  # end

end
