class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  def index
    @tasks = Task.all.not_complete
    respond_to do |format|
      format.html
      format.json { render json: @tasks }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: @task }
    end
  end

  def new
    @task = Task.new
    respond_with Task.create(params[:task])
  end

  def edit
  end

  def create
    @task = Task.new(task_params)
    @task.save
    # respond_with(@task)
  end

  def update
    @task.update(task_params)
    # respond_with(@task)
  end

  def destroy
    @task.destroy
    # respond_to :js
    # respond_with(@task)
  end

  def update_multiple
    @task = Task.update(params[:id].keys, params[:tasks].values)
    redirect_to timer_path
  end

  def timer
    @tasks = Task.all
  end

  def update_multiple
    @task = Task.update(params[:tasks].keys, params[:task].values)
    redirect_to timer_path
  end

  def timer
    @complete = Task.all.complete
  end

  private
    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:task, :category, :complete, :user_id, :team_id)
    end
end
