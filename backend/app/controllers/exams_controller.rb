class ExamsController < ApplicationController
  before_action :set_exam, only: [:show, :update, :destroy]
  before_action 

  # GET /exams
  def index
    @exams = Exam.all

    render json: @exams
  end

  # GET /exams/1
  def show
    render json: @exam
  end

  # POST /exams
  def create
    my_params = exam_params
    current_section = Section.find(id = my_params[:section_id])
    current_course_id = current_section.course[:id]
    my_params[:course_id] = current_course_id
    @exam = Exam.new(my_params)

    if @exam.save
      render json: @exam, status: :created, location: @exam
    else
      render json: my_params, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exams/1
  def update
    if @exam.update(exam_params)
      render json: @exam
    else
      render json: @exam.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exams/1
  def destroy
    @exam.destroy
  end

  private
    
    # Use callbacks to share common setup or constraints between actions.
    def set_exam
      @exam = Exam.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def exam_params
      params.permit(:date, :topic, :section_id, :course_id, :admin_id)
    end
end
