<Row>
  <BoardContextProvider>
    <SegmentContextProvider>
      <RectaAGContextProvider>
        <Col>
          <Row>
            <Col className="actividad" /* sm={12} md={9} xl={6} */>
              <p>
                <b>Actividad 12:</b> Tomando en cuenta los datos de la Tabla 5,
                completa la siguiente información:
              </p>
              <ul>
                <li className="liAct-4">
                  <InlineMath>{"0"}</InlineMath> y{" "}
                  <InlineMath>{"f(0)"}</InlineMath> se pueden graficar como el
                  punto <InlineMath>{"A=(0, 30)"}</InlineMath>
                </li>
                <li className="liAct-4">
                  <InlineMath>{"5"}</InlineMath> y{" "}
                  <InlineMath>{"f(5)"}</InlineMath> se pueden graficar como el
                  punto <InlineMath>{"B=(5, 72.5)"}</InlineMath>
                </li>
                <li className="liAct-4">
                  <InlineMath>{"10"}</InlineMath> y{" "}
                  <InlineMath>{"f(10)"}</InlineMath> se pueden graficar como el
                  punto <InlineMath>{"C=("}</InlineMath>
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.c_x}
                    onChange={(e) =>
                      handlePointsInputChange("c_x", e.target.value)
                    }
                  />
                  ,
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.c_y}
                    onChange={(e) =>
                      handlePointsInputChange("c_y", e.target.value)
                    }
                  />
                  <InlineMath>{")"}</InlineMath>
                </li>
                <li className="liAct-4">
                  <InlineMath>{"15"}</InlineMath> y{" "}
                  <InlineMath>{"f(15)"}</InlineMath> se pueden graficar como el
                  punto <InlineMath>{"D=("}</InlineMath>
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.d_x}
                    onChange={(e) =>
                      handlePointsInputChange("d_x", e.target.value)
                    }
                  />
                  ,
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.d_y}
                    onChange={(e) =>
                      handlePointsInputChange("d_y", e.target.value)
                    }
                  />
                  <InlineMath>{")"}</InlineMath>
                </li>
                <li className="liAct-4">
                  <InlineMath>{"20"}</InlineMath> y{" "}
                  <InlineMath>{"f(20)"}</InlineMath> se pueden graficar como el
                  punto <InlineMath>{"E=("}</InlineMath>
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.e_x}
                    onChange={(e) =>
                      handlePointsInputChange("e_x", e.target.value)
                    }
                  />
                  ,
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.e_y}
                    onChange={(e) =>
                      handlePointsInputChange("e_y", e.target.value)
                    }
                  />
                  <InlineMath>{")"}</InlineMath>
                </li>
                <li className="liAct-4">
                  <InlineMath>{"25"}</InlineMath> y{" "}
                  <InlineMath>{"f(25)"}</InlineMath> se pueden graficar como el
                  punto <InlineMath>{"F=("}</InlineMath>
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.f_x}
                    onChange={(e) =>
                      handlePointsInputChange("f_x", e.target.value)
                    }
                  />
                  ,
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.f_y}
                    onChange={(e) =>
                      handlePointsInputChange("f_y", e.target.value)
                    }
                  />
                  <InlineMath>{")"}</InlineMath>
                </li>
                <li className="liAct-4">
                  <InlineMath>{"30"}</InlineMath> y{" "}
                  <InlineMath>{"f(30)"}</InlineMath> se pueden graficar como el
                  punto <InlineMath>{"G=("}</InlineMath>
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.g_x}
                    onChange={(e) =>
                      handlePointsInputChange("g_x", e.target.value)
                    }
                  />
                  ,
                  <input
                    className="input-coord"
                    type="text"
                    value={valuesPoints.g_y}
                    onChange={(e) =>
                      handlePointsInputChange("g_y", e.target.value)
                    }
                  />
                  <InlineMath>{")"}</InlineMath>
                </li>
                y en general:
                <p>
                  <br />
                  <InlineMath>{"x"}</InlineMath> y{" "}
                  <InlineMath>{"f(x)"}</InlineMath> se puede graficar como el
                  punto <InlineMath>{"P(x, y)"}</InlineMath>.
                </p>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Hasta aquí lo que hemos obtenido son solo puntos aislados que
                representan exactamente la misma información que la Tabla 5. Es
                decir, de estos puntos graficados en el plano cartesiano es
                posible leer cuánto cobrará el taxista si recorre 5 km, 10 km,
                etc. tan solo con mirar a que altura (coordenada y) se encuentra
                cada punto. No obstante, podemos obtener más información si
                unimos los putos. ¿Qué se forma si unimos los puntos que
                graficamos?
              </p>
              <Form /* className="prueba" */>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA"
                    name="opcionesPreg4"
                    value="a"
                    checked={opcionSelecPreg4 === "a"}
                    onChange={() => handleSelecPreg4("a")}
                    label="Una recta"
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB"
                    name="opcionesPreg4"
                    value="b"
                    checked={opcionSelecPreg4 === "b"}
                    onChange={() => handleSelecPreg4("b")}
                    label="Una parábola"
                  />

                  <Form.Check
                    type="checkbox"
                    id="opcionC"
                    name="opcionesPreg4"
                    value="c"
                    checked={opcionSelecPreg4 === "c"}
                    onChange={() => handleSelecPreg4("c")}
                    label="Un segmento de recta"
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionD"
                    name="opcionesPreg4"
                    value="d"
                    checked={opcionSelecPreg4 === "d"}
                    onChange={() => handleSelecPreg4("d")}
                    label="Una curva cúbica"
                  />
                </Form.Group>
              </Form>
              <p>
                <br />
                Ciertamente, cuando unimos los puntos se forma el segmento de
                recta AG. Oprime el siguiente botón que habilitará la opción de
                trazar el segmento en la ventana gráfica de la Actividad 13.
                <br />
                <br />
                <Button>
                  Habilitar segmento <InlineMath>{"AG"}</InlineMath>
                </Button>
                <br />
                <br />
                Dicho segmento nos permite aproximar el precio de cualquier
                viaje que comprenda una distancia entre 0 y 30 km. Por ejemplo,
                si un viaje dura 5.2 km, lo único que tienes que hacer es buscar
                5.2 en el eje x y mirar cuál es la coordenada y que le
                corresponde, tal como se aprecia en la vista gráfica X si
                oprimes el botón Punto movible.
                <br />
                <br />
                <Button>Punto movible M</Button>
                <BlockMath>
                  {"\\text{Dom}(f): \\{ x \\in \\mathbb{R} \\}"}
                </BlockMath>
                <BlockMath>
                  {"\\text{Im}(f): \\{ f(x) \\in \\mathbb{R} \\}"}
                </BlockMath>
                <br />
                <br />
                <Button>
                  Graficar la función <InlineMath>{"f(x)=2x"}</InlineMath>
                </Button>
                <br />
                <br />
              </p>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={9} xl={5}>
          <Row>
            <Col className="actividad">
              {/*  <BoardContextProvider>
          <SegmentContextProvider>
            <RectaAGContextProvider> */}
              <p>
                <b>Actividad 13:</b> En la siguiente cuadrícula, arrastra los
                puntos amarillos a las coordenadas que les corresponden, según
                la actividad 12.
                <br />
                <br />
                <SegmentAG />
                <RectaAG />
              </p>
              <Board />
              <GraficoArrastrePuntos />
              {/* </RectaAGContextProvider>
          </SegmentContextProvider>
        </BoardContextProvider> */}
            </Col>
          </Row>
        </Col>
      </RectaAGContextProvider>
    </SegmentContextProvider>
  </BoardContextProvider>
</Row>;
