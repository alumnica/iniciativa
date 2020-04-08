# iniciativa
#crear entorno virtual

virtualenv .venv -p python3
source .venv/bin/activate

#instalar djangp
pip install django

#generar DB
python manage.py makemigrations
python manage.py migrate

#ejecutar proyecto
python manage.py runserver
