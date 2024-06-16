# {Insert Name Here}

## Settup 
### Django
1. **Clone the repository:**
    ```sh
    git clone https://github.com/Teddy-bear-123/project && cd project
    ```

2. **Create and activate the virtual environment:**
    ```sh
    python3.11 -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **Install backend dependencies:**
    ```sh
    pip install -r requirements.txt (didnt do this yet)
    ```

4. **Apply migrations and run the server:**
    ```sh
    cd mnc
    python manage.py migrate
    python manage.py runserver
    ```

The Django backend should now be running on `http://127.0.0.1:8000`.

### Frontend Setup (React)

1. **Navigate to the React directory:**
    ```sh
    cd React
    ```

2. **Install frontend dependencies:**
    ```sh
    npm install
    ```

3. **Run the frontend development server:**
    ```sh
    npm run dev
    ```

The React frontend should now be running on `http://127.0.0.1:5173`.


