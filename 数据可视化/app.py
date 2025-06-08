from flask import Flask
from flask import render_template, request,redirect
import utils
from flask import jsonify
from jieba.analyse import extract_tags
import string
import pandas as pd
import numpy as np
import pymysql
app = Flask(__name__)

np.set_printoptions(suppress=True)
pd.set_option('display.float_format', lambda x: '%.3f' % x)
file1 = pd.read_csv(r'result.csv')
file1 = np.array(file1)

@app.route('/main')
def hello_world():
    return render_template("main.html")

@app.route('/pre')
def hello_world1():
    return render_template("pre_热力图.html")

@app.route('/r1')
def hello_world2():
    return render_template("real_热力图（0117-0131).html")

@app.route('/r2')
def hello_world3():
    return render_template("real_热力图（0201-0215）.html")

@app.route('/more')
def hello_world4():
    return render_template("more.html")

@app.route('/grid')
def hello_world5():
    return render_template("grid_strength (2).html")

@app.route('/main2')
def hello():
    return render_template('main2.html')

@app.route('/')
def login():
    return render_template("start.html")

@app.route('/time')
def get_time():
    return utils.get_time()


@app.route('/test', methods=['POST', 'GET'])
def find():
    time = int(request.form.get('username'))
    aid = int(request.form.get('pw'))
    for item in file1:
        if time == int(item[0]) and aid == int(item[1]):
            return render_template("main2.html", msg='%.4f' % item[2])


@app.route('/test2', methods=['POST', 'GET'])
def find2():
            connect = pymysql.connect(host='localhost',  # 本地数据库
                              user='root',
                              password='1924353326',
                              db='mybatis',
                              charset='utf8')  # 服务器名,账户,密码，数据库名称
            time = int(request.form.get('username'))
            aid = int(request.form.get('pw'
            cursor = conn.cursor()
            sql = 'select * from data where time='+time +'and aid='+aid
            cursor.execute(sql)
            all = cursor.fetchall()

            return render_template("main2.html",all)

if __name__ == '__main__':
    app.run(debug=True)
